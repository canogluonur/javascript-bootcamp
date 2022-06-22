import './style.css'



async function getData(){
 const response= await fetch('./data.json');
 let data = await response.json();


 function groupBy(name, groupName) {
    const first = name.reduce((acc, groups) => {
      let key = groups[groupName]; 
      if (!acc[key]) {
        acc[key] = []; 
      }
      acc[key].push(groups); 
      return acc; 
    }, {});
    return first; 
  }
  const groupList = groupBy(data, "group"); 
  console.log(groupList); 
  


}
getData();


