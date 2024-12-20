function getScriptResults(scriptName: string): string {
  const script = require(`../scripts/${scriptName}`);

  console.log(script.script());

  return `${script.script()}`;
}

export default getScriptResults;
