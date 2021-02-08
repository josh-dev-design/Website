import '../Style/Components/Section/Section.css'
import Music from '../JSON/music.json'


const music = () => {
    return (
        <div className="favourite">
            <div className="fave-container">
                <div className="fave-music">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Released Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Music.map((musicDetails, index) => {
                                return <>
                                    <tr >
                                        <td>{musicDetails.title}</td>
                                        <td>{musicDetails.artist}</td>
                                        <td>{musicDetails.releasedDate}</td>
                                    </tr>
                                </>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}

export default music;