#!/usr/bin/env python3
"""Remove emojis from all Python scripts"""

import os
from pathlib import Path

replacements = {
    '✅': '[OK]',
    '✨': '[DONE]',
    '📊': '[STATS]',
    '🔄': '[UPDATE]',
    '🔧': '[BUILD]',
    '📋': '[INFO]',
    'ℹ️': '[NOTE]',
    '❌': '[ERROR]',
    '⚠️': '[WARN]',
    '🤖': '[AUTO]'
}

scripts_dir = Path(__file__).parent

for file in scripts_dir.glob("*.py"):
    if file.name == "fix_emojis.py":
        continue

    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    for emoji, text in replacements.items():
        content = content.replace(emoji, text)

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"Fixed {file.name}")

print("All emojis removed!")