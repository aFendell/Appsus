import { DynamicCmp } from './DynamicCmp.jsx';
import { NoteAdd } from './NoteAdd.jsx';
import {NoteModal} from './NoteModal.jsx'


export function NoteList(props) {
    return (
        <div className="list-container">


            <div className="note-add">
                <NoteAdd loadNotes={props.loadNotes} />
            </div>
            <div className="note-list">
                {props.notes.map(note => <DynamicCmp note={note} key={note.id} />)}
            </div>
                <NoteModal/>
            {/* <div className="modal-container">
                <button>Open Modal</button>
                <div className="modal" id="modal">
                    <div className="modal-header">
                        <div className="modal-titel">Note Modal</div>
                        <button className="close-btn">&times;</button>
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
                <div id="overlay"></div>
            </div> */}

        </div>
    )
}