var logsFunc = function(version) {
  if(typeof window !== 'undefined') {
    console.log(`当前版本：${version}`);
  }
}

export default logsFunc;