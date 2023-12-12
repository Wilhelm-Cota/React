function Data(props){
    const {myName, age, role} = props;
    return <div>
        <p>{myName}</p>
        <p>{age}</p>
        <p>{role}</p>

        {/* <p>{props.myname}</p>
        <p>{props.age}</p>
        <p>{props.role}</p> */}
    </div>
}
export default Data;