$(() => {
    console.log(".NET MAUI")
    .then((rawData) => rawData.json())
    .then(data =>{
          console.log(data);
        
        courseData = data;

    })
    console.log(courseData);
});