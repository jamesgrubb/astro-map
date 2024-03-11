onmessage = function(event) {
    const { mapSize } = event.data;

    const svg = paper.project.exportSVG({
        asString: true,
        bounds: 'content',
        embedImages: false
    });

    postMessage({ type: 'exportComplete', data: svg });
};