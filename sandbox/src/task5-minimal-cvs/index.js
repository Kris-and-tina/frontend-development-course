
/**
 * Возвращает минимальную систему контроля версий
 * 
 * @param {Array} initialCommit 
 * @returns {Object}
 */
function getMinimalCVS(initialCommit) {
    var versions = [];
    versions.push(initialCommit.slice());

    function head() {
        return versions[versions.length - 1].slice();
    }

    function history() {
        var allVersions = [];
        for (var i = 0; i < versions.length; i++) {
            allVersions.push(versions[i].slice());
        }
        return allVersions;
    }

    function push(element) {
        var current = versions[versions.length - 1];
        var newVersion = current.slice();
        newVersion.push(element);
        versions.push(newVersion);
    }

    function pop() {
        var current = versions[versions.length - 1];
        if (current.length === 0) {
            return undefined;
        }
        var removedElement = current[current.length - 1];
        var newVersion = current.slice(0, current.length - 1);
        versions.push(newVersion);
        return removedElement;
    }

    return {
        head: head,
        history: history,
        push: push,
        pop: pop
    };
}

