const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}
// queue = [e]
// print = a, b, c, e
function breadthFirstPrint(graph, source) {
    const queue = [ source ];

    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current);
        for (let neighbor of graph[current]) {
            queue.push(neighbor);
        }
    }
}

breadthFirstPrint(graph, 'a');