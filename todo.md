# Node

Parse github files -> generate pywal template -> feed with pywal JSON data

All or specific repos
DL files
parse & generate template
generate output


https://github.com/dylanaraps/pywal
https://github.com/yargs/yargs

# Colors in Github

(const hexRegex = /#([0-9a-f]{3}){1,2}/ig;

// Get all text nodes that have hex codes
const textNodes = [];
{
    const walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let n;
    while((n = walk.nextNode())) {
        if (hexRegex.test(n.nodeValue)) {
            textNodes.push(n);
        }
    }
}

// Get all parent nodes as it is the only way to wrap the hex
const nodes = textNodes.map(node => node.parentNode);

// This must all be on one line due to whitespace somtimes mattering in pages with <pre>
const wrappedHTML ='<span class="hex-color-square" style="background-color: $&">$&</span>';

// replace the hex with the wrapped version of the hex, containing a hiden div
nodes.forEach(node => {
    node.innerHTML = node.innerHTML.replace(hexRegex, wrappedHTML);
});
)()
