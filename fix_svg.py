import sys
import re

svg_path = 'src/assets/images/menu-bg-mobile.svg'
with open(svg_path, 'r', encoding='utf-8') as f:
    text = f.read()

# Original multiline substring
target_re = re.compile(
    r'<g clip-path="url\(#clip0_21_7312\)">\s*'
    r'<path d="M0 0H428V161C428 174\.255 417\.255 185 404 185H24C10\.7452 185 0 174\.255 0 161V0Z" fill="white"/>\s*'
    r'<rect width="428" height="185" fill="url\(#pattern0_21_7312\)"/>\s*'
    r'<rect width="428" height="185" fill="url\(#paint0_linear_21_7312\)"/>\s*'
    r'</g>'
)

replacement = (
    '<rect width="428" height="185" fill="url(#pattern0_21_7312)"/>\n'
    '<rect width="428" height="185" fill="url(#paint0_linear_21_7312)"/>'
)

if target_re.search(text):
    text = target_re.sub(replacement, text)
    with open(svg_path, 'w', encoding='utf-8') as f:
        f.write(text)
    print("SUCCESS: Removed clipping path and white background path.")
else:
    print("WARNING: Could not find the target SVG elements to remove.")
