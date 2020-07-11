const apiKey = 'VF0SIekFUGtpt53RozH92xDreqHpbpcVSQzGzbaf8J2OWNpm03vrGJq0xrPVXpUwbND7TMvGX0hjRstAtFLCSa4uvMfSwzBfGRkpzpNDWmW5D6GvW6XT67H4G7G_WHYx';
const url = 'https://api.yelp.com/v3/businesses/search?'

const Yelp = {
    async search(term, location, sortBy) {
        const response = await fetch('https://cors-anywhere.herokuapp.com/' + url + 'term=' + term + '&location=' + location + '&sort_by=' + sortBy,
            { headers: { Authorization: `Bearer ${apiKey}` } });
        const jsonResponse = await response.json();
        if (jsonResponse.businesses) {
            return jsonResponse.businesses.map((business) => {
                return {
                    id: business.id,
                    imageSrc: business.image_url,
                    name: business.name,
                    address: business.location.address1,
                    city: business.location.city,
                    state: business.location.state,
                    zipCode: business.location.zipCode,
                    category: business.categories[0].title,
                    rating: business.rating,
                    reviewCount: business.review_count
                };
            });
        }
    }
}

export default Yelp