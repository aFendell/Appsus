

export class NoteModal extends React.Component {
    state = {
        isModalShown: false
    }

    onToggleModal = () => {
        this.setState(({ isModalShown }) => ({ isModalShown: !isModalShown }))
        console.log('open / close modal');
    }
    render() {
        const { isModalShown } = this.state
        return (
            <div className="modal-container">
                <button onClick={this.onToggleModal}>Open Modal</button>
                <div className={isModalShown ? "modal active" : "modal"} id="modal">
                    <div className="modal-header">
                        <div className="modal-titel">Note Modal</div>
                        <button className="close-btn" onClick={this.onToggleModal}>&times;</button>
                    </div>
                    <div className="modal-body">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit exercitationem
                        doloremque, ea autem vel excepturi corporis placeat eveniet eos, reprehenderit
                        repudiandae adipisci? Reiciendis iure beatae rerum alias, voluptatum amet rem eveniet
                        dolorum, iusto laborum exercitationem hic nostrum non officia voluptates in ullam et!
                        Nostrum quas enim totam! Debitis atque delectus quo error quasi nisi rerum ut. Id ipsam
                        sequi minus eos ducimus officiis voluptate, sit, quibusdam, facere animi repellat! Eaque dolor
                        repellat fuga ipsa blanditiis sequi optio libero obcaecati!
                </div>
                </div>
                <div className={isModalShown ? "overlay active" : "overlay"} id="overlay" onClick={this.onToggleModal}></div>
            </div>
        )
    }
}