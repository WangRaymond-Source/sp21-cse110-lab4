for(let prop in statistics){
    if(prop.charAt(0) === 'r' || (statistics[prop] % 2 )!= 0){
      console.log(statistics[prop]);
      
    }
}