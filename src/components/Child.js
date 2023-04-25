function Child(props){
    return (
        <>
            <p>{props.saleDetails.percentReduction}</p>
            <p>{props.saleDetails.callToAction}</p>
        </>

    )
}

export default Child;