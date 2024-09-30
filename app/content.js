window.addEventListener ("load", async function () {

  const sleep = (t) => new Promise ((resolve) => setTimeout (resolve, t))

  const currentUrl = window.location.href;
  const urlPattern = /\/workflow+\/.+/;

  let n8nButton = document.querySelector(`[data-test-id="workflow-save-button"]`);

  while (!n8nButton) {

    n8nButton = document.querySelector(`[data-test-id="workflow-save-button"]`);

    await sleep (100);

  }

  if (urlPattern.test(currentUrl) && n8nButton) {
  
    main ();
  
  }
  
  function main () {
  
  
    function handleInteraction() {

      console.log('User interaction detected');
  
      n8nButton.click ();

    }
  
    window.addEventListener('click', handleInteraction);

    window.addEventListener('keypress', handleInteraction);
  
  }

})