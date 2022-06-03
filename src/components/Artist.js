function Artist(props){
    return(
        <div id="artistinfo">
            <div>
                {props.name}  
            </div>
            <div>
                {props.dob}  
            </div>
            <div>
                {props.songslist}  
            </div>
        </div>
    )
}
export default Artist;