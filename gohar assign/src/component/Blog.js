import comfortable from '../assets/comfortable.webp';
import lamp from '../assets/lamp.webp';
import chair from '../assets/sofa chair.jpeg';
import '../css/Blog.css'
function Blog() {

    let cards = [
        {
            image: comfortable,
            title: '  publishing industries for previewing layouts and visual mockups.',
            text: ' used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
        },
        {
            image: lamp,
            title: ' publishing industries for previewing layouts and visual mockups.',
            text: ' used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
        },
        {
            image: chair,
            title: ' publishing industries for previewing layouts and visual mockups.',
            text: ' used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
        },
    ]

    return (
        <>
            <div className='blog-main'>
                <h1>Blogs & Insights</h1>
                <p>Export our flag and phalana  dimkhana</p>
                <div className="container-fluid">
                    <div className="row">

                        {cards.map((x) => (
                            <div className="col-12 col-sm-12 col-md-4 col-lg-4 " >
                                <div className="cards h-75 overflow-hidden  " >
                                    <img src={x.image} style={{height:"90%", width:"100%",}} />
                                    <div className='contant-div '>
                                        <h6>{x.title}</h6>
                                        <p>{x.text}</p>
                                        <a href="#">Read More</a>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </>
    );
}

export default Blog;
