import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import jsbarcode from "jsbarcode";

function Barcode(props) {
    let rendererReference = React.createRef();
    const changeHandler = () => {
        var canvas = rendererReference.current;
        jsbarcode(canvas, props.value, { ...props });
    }

    useEffect(() => {
    changeHandler();
    });

    return (
        <div>
            <props.renderer alt="React Barcode" ref={rendererReference} />
        </div>
    )
}

Barcode.propTypes = {
    value: PropTypes.string.isRequired,
    renderer: PropTypes.string,
    height: PropTypes.number,
    format: PropTypes.string,
    width: PropTypes.number,
    displayValue: PropTypes.bool,
    fontOptions: PropTypes.string,
    font: PropTypes.string,
    textAlign: PropTypes.string,
    textPosition: PropTypes.string,
    textMargin: PropTypes.number,
    fontSize: PropTypes.number,
    background: PropTypes.string,
    lineColor: PropTypes.string,
    margin: PropTypes.number,
    marginTop: PropTypes.number,
    marginBottom: PropTypes.number,
    marginLeft: PropTypes.number,
    marginRight: PropTypes.number,
}

Barcode.defaultProps = {
    format: 'CODE128',
    renderer: 'img',
    width: 2,
    height: 100,
    displayValue: true,
    fontOptions: '',
    font: 'monospace',
    textAlign: 'left',
    textPosition: 'bottom',
    textMargin: 2,
    fontSize: 20,
    background: '#ffffff',
    lineColor: '#000000',
    margin: 10,
}

export default Barcode;