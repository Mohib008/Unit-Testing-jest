const googleDatabase = [
  "cars.com",
  "tracks.com",
  'pictures.com',
  'cellphones.com',
  'computer.com',
  'computersell.com',
  'computerRepiar.com',
  'cellphoneRepir.com',
  'cellphonesell.com'
];


const  googleSearch = (searchInput) => {
  const matches = googleDatabase.filter(website =>{
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

console.log(googleSearch("cellphone"));