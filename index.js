// rest APi

// 4 is gedir CRUD sistemi

// C reate / POST
// R ead   / GET
// U pdate / PUT
// D elete / DEL

// mektub kimidi

// header:{
//     kimterefinden:"215ffs1515" api key meselen
//     melumat:"json"   
// }

// body:{
//     basliq:"titanic"
//     il:1997
// }

// $.ajax({
//     url: url,
//     dataType:"json",
//     type: "Post",
//     async: true,
//     data: { },
// })

// $(document).ready(function(){

// fetch("https://bloggy-api.herokuapp.com/posts/",{
//     method:"GET"
// }).then(res=>{
//     let secondPromise = res.json()
//     return secondPromise

// }).then(data=>{
//     console.log(data);
// })

$(document).ready(function(){

//  let postData = {
//      title:"Ajax ile elave etdik",
//      bodey: "jvndnvjdnjvnjdnjvnjdnbvjdv"
//  };
//   let promise = $.ajax({
//       url:"https://bloggy-api.herokuapp.com/posts/",
//       method:"GET",
//       data:postData
//   });
//   promise.then((res)=>{
//       console.log(res);
//   });


const postList = $("#postList")

const renderPosts =(arr)=>{
    postList.html(arr.map(post=>`
    <div class="card m-4">
            <img
              src="https://cdn.dribbble.com/users/713533/screenshots/14158095/media/ae32d01dfc221a34aa5f3a2060a1e028.png?compress=1&resize=400x300"
              class="card-img-top"
              height="200"
              id="moviePoster"
              style="object-fit: cover"
            />
            <div class="card-body">
              <h5 class="card-title" id="movieName">${post.title}</h5>
              <p class="card-text" id="movieAwards">
                  ${post.body}
              </p>
              
            </div>
          </div>
    
    
        `
    )
    ).join();

};

const getPosts = () =>{
  $.ajax({
      url:"https://bloggy-api.herokuapp.com/posts/",
  }).then((res) => {
      console.log("getPosts",res);
      renderPosts(res)
  });
};

getPosts()

});