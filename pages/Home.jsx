const { Link } = ReactRouterDOM

export function Home() {
    return <section className="home">
        <h1>Welcome to Appsus</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, 
            est fugit tenetur dolores laboriosam sapiente cum in quae pariatur 
            assumenda dolore, amet repellat non, similique cumque atque dolorum 
            numquam magni perferendis quisquam harum? Facere dolore nemo ad nisi 
            sunt fugit!</p>
        {/* <p>View our extensive <Link to='/book'>book colection</Link></p> */}
    </section>
}