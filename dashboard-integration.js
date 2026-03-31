// Dashboard Integration Module
// S3 Browser와 KB Viewer를 기존 대시보드에 통합

class DashboardIntegration {
    constructor(dashboard) {
        this.dashboard = dashboard;
        this.s3Browser = null;
        this.kbViewer = null;
        this.initialized = false;
    }

    // 통합 모듈 초기화
    async initialize() {
        if (this.initialized) return;

        console.log('Initializing dashboard integration...');

        // S3 Browser 초기화
        if (typeof S3Browser !== 'undefined') {
            this.s3Browser = new S3Browser();
            await this.initS3Browser();
        } else {
            console.warn('S3Browser not found');
        }

        // KB Viewer 초기화
        if (typeof KBViewer !== 'undefined') {
            this.kbViewer = new KBViewer();
            await this.initKBViewer();
        } else {
            console.warn('KBViewer not found');
        }

        // KB Entity Viewer 초기화 (PostgreSQL/Neptune 구조)
        if (typeof KBEntityViewer !== 'undefined') {
            this.kbEntityViewer = new KBEntityViewer();
        }

        this.initialized = true;
    }

    // S3 Browser 초기화 및 UI 설정
    async initS3Browser() {
        const container = document.getElementById('s3-iterations-container');
        if (!container) {
            console.warn('S3 iterations container not found');
            return;
        }

        try {
            const iterations = await this.s3Browser.loadIterations();
            container.innerHTML = `
                <div class="space-y-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold">S3 Stored Iterations</h3>
                        <button onclick="window.dashboardIntegration.refreshS3Iterations()"
                                class="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600">
                            Refresh
                        </button>
                    </div>
                    <div id="s3-iterations-list">
                        ${this.s3Browser.renderIterationsList()}
                    </div>
                </div>
            `;

            // 전역 함수로 이터레이션 상세 뷰 핸들러 등록
            window.viewIterationDetails = (iterationId) => {
                this.showIterationDetails(iterationId);
            };

            window.previewS3File = (iterationId, fileName) => {
                this.previewS3File(iterationId, fileName);
            };

        } catch (error) {
            console.error('Failed to initialize S3 Browser:', error);
            container.innerHTML = `
                <div class="text-red-600 p-4 border border-red-300 rounded">
                    Failed to load S3 iterations: ${error.message}
                </div>
            `;
        }
    }

    // KB Viewer 초기화 및 UI 설정
    async initKBViewer() {
        const container = document.getElementById('kb-explorer-container');
        if (!container) {
            console.warn('KB explorer container not found');
            return;
        }

        try {
            // PostgreSQL/Neptune 구조 뷰 사용
            if (this.kbEntityViewer) {
                const kbDetailView = await this.kbEntityViewer.renderKBDetailView('art');
                container.innerHTML = kbDetailView;

                // Database 전환 함수 등록
                window.showKBDatabase = (dbType) => {
                    const postgresView = document.getElementById('postgres-view');
                    const neptuneView = document.getElementById('neptune-view');

                    if (dbType === 'postgres') {
                        postgresView.classList.remove('hidden');
                        neptuneView.classList.add('hidden');
                    } else {
                        postgresView.classList.add('hidden');
                        neptuneView.classList.remove('hidden');
                    }
                };
            } else {
                // Fallback: 기존 KB Viewer 사용
                const [artKBData, metaKBData] = await Promise.all([
                    this.kbViewer.loadKBRegistry('art'),
                    this.kbViewer.loadKBRegistry('meta')
                ]);

                container.innerHTML = `
                    <div class="space-y-6">
                        <!-- KB Selection -->
                        <div class="flex space-x-4">
                            <button id="art-kb-btn" onclick="window.dashboardIntegration.showKB('art')"
                                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                Art Task Plan KB
                            </button>
                            <button id="meta-kb-btn" onclick="window.dashboardIntegration.showKB('meta')"
                                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
                                Meta Iteration KB
                            </button>
                        </div>

                        <!-- Art KB Explorer -->
                        <div id="art-kb-content" class="kb-content">
                            ${this.kbViewer.renderKBExplorer(artKBData, 'art')}
                        </div>

                        <!-- Meta KB Explorer -->
                        <div id="meta-kb-content" class="kb-content hidden">
                            ${this.kbViewer.renderKBExplorer(metaKBData, 'meta')}
                        </div>
                    </div>
                `;
            }

            // 전역 함수로 KB 관련 핸들러 등록
            window.viewEntityDetails = (entityId, kbType) => {
                this.showEntityDetails(entityId, kbType);
            };

            window.filterKBEntities = (kbType) => {
                this.filterKBEntities(kbType);
            };

        } catch (error) {
            console.error('Failed to initialize KB Viewer:', error);
            container.innerHTML = `
                <div class="text-red-600 p-4 border border-red-300 rounded">
                    Failed to load KB data: ${error.message}
                </div>
            `;
        }
    }

    // S3 이터레이션 새로고침
    async refreshS3Iterations() {
        const listContainer = document.getElementById('s3-iterations-list');
        if (!listContainer || !this.s3Browser) return;

        listContainer.innerHTML = '<div class="text-center py-4">Loading...</div>';

        try {
            const iterations = await this.s3Browser.loadIterations();
            listContainer.innerHTML = this.s3Browser.renderIterationsList();
        } catch (error) {
            listContainer.innerHTML = `
                <div class="text-red-600">Failed to refresh: ${error.message}</div>
            `;
        }
    }

    // 이터레이션 상세 정보 표시
    async showIterationDetails(iterationId) {
        const container = document.getElementById('s3-iterations-container');
        if (!container || !this.s3Browser) return;

        container.innerHTML = '<div class="text-center py-4">Loading iteration details...</div>';

        try {
            const details = await this.s3Browser.loadIterationDetails(iterationId);
            container.innerHTML = `
                <div>
                    <button onclick="window.dashboardIntegration.backToIterationsList()"
                            class="mb-4 px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600">
                        ← Back to List
                    </button>
                    ${this.s3Browser.renderIterationDetails(details)}
                </div>
            `;
        } catch (error) {
            container.innerHTML = `
                <div>
                    <button onclick="window.dashboardIntegration.backToIterationsList()"
                            class="mb-4 px-3 py-1 bg-gray-500 text-white text-sm rounded hover:bg-gray-600">
                        ← Back to List
                    </button>
                    <div class="text-red-600">Failed to load details: ${error.message}</div>
                </div>
            `;
        }
    }

    // S3 파일 미리보기
    async previewS3File(iterationId, fileName) {
        if (!this.s3Browser) return;

        try {
            const content = await this.s3Browser.previewFile(iterationId, fileName);

            // 모달 생성
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white p-6 rounded-lg max-w-4xl max-h-screen overflow-auto w-full mx-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold">${fileName}</h3>
                        <button onclick="this.closest('.fixed').remove()"
                                class="text-2xl text-gray-600 hover:text-black">&times;</button>
                    </div>
                    <pre class="bg-gray-100 p-4 rounded overflow-x-auto text-sm">
${JSON.stringify(content, null, 2)}
                    </pre>
                </div>
            `;
            document.body.appendChild(modal);

        } catch (error) {
            alert(`Failed to preview file: ${error.message}`);
        }
    }

    // 이터레이션 목록으로 돌아가기
    backToIterationsList() {
        this.initS3Browser();
    }

    // KB 탭 전환
    showKB(kbType) {
        // 모든 KB 컨텐츠 숨기기
        document.querySelectorAll('.kb-content').forEach(content => {
            content.classList.add('hidden');
        });

        // 버튼 스타일 업데이트
        document.getElementById('art-kb-btn').className =
            kbType === 'art'
            ? 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            : 'px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300';

        document.getElementById('meta-kb-btn').className =
            kbType === 'meta'
            ? 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
            : 'px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300';

        // 선택된 KB 컨텐츠 표시
        const content = document.getElementById(`${kbType}-kb-content`);
        if (content) {
            content.classList.remove('hidden');
        }
    }

    // KB 엔티티 필터링
    async filterKBEntities(kbType) {
        const searchInput = document.getElementById(`${kbType}-kb-search`);
        const typeFilter = document.getElementById(`${kbType}-kb-type-filter`);

        if (!searchInput || !typeFilter || !this.kbViewer) return;

        const searchTerm = searchInput.value.toLowerCase();
        const selectedType = typeFilter.value;

        // 필터링된 데이터로 다시 렌더링
        const kbData = await this.kbViewer.loadKBRegistry(kbType);
        const filtered = this.kbViewer.filterEntities(kbData, searchTerm, selectedType);

        const container = document.getElementById(`${kbType}-kb-entities-list`);
        if (container) {
            container.innerHTML = this.kbViewer.renderEntitiesList(filtered, kbType);
        }
    }

    // 엔티티 상세 정보 표시
    async showEntityDetails(entityId, kbType) {
        if (!this.kbViewer) return;

        try {
            const details = await this.kbViewer.loadEntityDetails(entityId);

            // 모달 생성
            const modal = document.createElement('div');
            modal.className = 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50';
            modal.innerHTML = `
                <div class="bg-white p-6 rounded-lg max-w-4xl max-h-screen overflow-auto w-full mx-4">
                    <div class="flex justify-between items-center mb-4">
                        <h3 class="text-lg font-semibold">Entity: ${entityId}</h3>
                        <button onclick="this.closest('.fixed').remove()"
                                class="text-2xl text-gray-600 hover:text-black">&times;</button>
                    </div>
                    ${this.kbViewer.renderEntityDetails(details)}
                </div>
            `;
            document.body.appendChild(modal);

        } catch (error) {
            alert(`Failed to load entity details: ${error.message}`);
        }
    }
}

// 전역 인스턴스 변수
window.dashboardIntegration = null;

// DOM 로드 완료 시 통합 모듈 초기화
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        if (window.dashboard) {
            window.dashboardIntegration = new DashboardIntegration(window.dashboard);
            window.dashboardIntegration.initialize();
        }
    }, 1000); // 기존 대시보드가 먼저 로드되도록 지연
});