async function callbackend() {
  const result = await fetch('linkhere');
  const res = await result.json();
  console.log(res);
}
callbackend();
