try {
  const del = require('del');
  (async () => {
    const deletedPaths = await del(['node_modules']);
    console.log('Deleted files and directories:\n', deletedPaths.join('\n'));
  })();
} catch {}
