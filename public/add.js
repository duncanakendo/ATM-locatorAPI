const atmForm = document.getElementById('atm-form');
const atmId = document.getElementById('atm-id');
const atmAddress = document.getElementById('store-address');
//Send POST to API to add atm

async function addAtm(e) {
 e.preventDefault();

  if (atmId.value === '' || atmAddress.value ==='') {

  }
  const sendBody = {
      atmId : atmId.value,
      adress: atmAddress.value
  }
  try {
      const  res = await fetch ('/api/v1/atm', {
          method: 'POST',
          headers: {
              'Content-Type' : 'apllication/json'
            
          },
          body: JSON.stringify(sendBODY)
      });
      if (res.status === 400) {
          throw Error('Atm aready exists')
      }
alert('Atm added');
window.location.href = '/index.html';

  } catch (err) {
      alert(err);
      retern;
   }

}



atmForm.addEventListener('submit', addAtm);

