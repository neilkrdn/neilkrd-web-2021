import Header from '../Components/Header.js'
import './Notes.css'

function Notes() {
    return (
        <div className="Notes">
            <Header />

            <div className="Head">
                Digital Notebooks
            </div>

            <div className="Subhead">
                Select your subject
            </div>

            <div className="NoteList">
                ENGR 111
                PHYS 1C
                LING 20
                STATS 10
            </div>

        </div>
    )
}

export default Notes;