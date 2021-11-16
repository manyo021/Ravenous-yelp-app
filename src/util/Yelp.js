const apiKey ='oGo1RWo-OdKwDrvNAoxPNboW4PhFUb9PaOsYyuAyaoYlyc0EIOIiJXsAPFftKgjPF4XCkLa5SmXR9yvmCEzgQIJyQT9TJGGWibzqhJF-POQ27tjzejYyA3mcsjxSYXYx'

 const Yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,{
            headers:{
                authorization: `Bearer ${apiKey}`
            }
        }).then(response =>{
            return response.json();
        }).then(jsonResponse =>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map((business)=>{
                    return {
                        id: business.id,
                        imageSrc: business.image_url ,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipcode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
}; 

export default Yelp;