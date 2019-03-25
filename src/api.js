export const fetchData = (position) => {
  return fetch(`http://api.apixu.com/v1/current.json?key=aca7ab9bf10240d69fe194102191303&q=${position}`)
    .then(res => res.json())
};