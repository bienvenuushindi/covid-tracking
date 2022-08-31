// const dataUrl = 'https://age-of-empires-2-api.herokuapp.com/api/v1/units';
export default async function fetchData() {
  let result = [];
  await fetch('api/v1/units', {
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json()).then((data) => { result = data.units; });
  return { data: result };
}
