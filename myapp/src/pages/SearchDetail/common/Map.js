const Maps = ({data, itemType}) => {
    const iframe = '<iframe width="100%" height="250" frameborder="0" style="border:0;border-radius: 20px;" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAOgP5EpdQwp2pICFxwFw7wdacIeW7RovE&q=台北101" allowfullscreen></iframe>';
    function Iframe(props) {
        return (<div dangerouslySetInnerHTML={ {__html:  props.iframe?props.iframe:""}} />);
    }
    return (
        <div>
            <Iframe iframe={iframe}/>
        </div>
    );
};

export default Maps;