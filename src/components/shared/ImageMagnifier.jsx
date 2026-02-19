
import { useState, useRef } from 'react';
import './ImageMagnifier.css';

function ImageMagnifier({
    src,
    width,
    height,
    magnifierHeight = 150,
    magnifierWidth = 150,
    zoomLevel = 2.5
}) {
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setImgSize] = useState([0, 0]);

    return (
        <div
            className="image-magnifier-container"
            style={{
                position: 'relative',
                height: height,
                width: width
            }}
        >
            <img
                src={src}
                className="image-magnifier-img"
                style={{ height: height, width: width }}
                onMouseEnter={(e) => {
                    // update image size and turn-on magnifier
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setImgSize([width, height]);
                    setShowMagnifier(true);
                }}
                onMouseMove={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.clientX - left;
                    const y = e.clientY - top;
                    setXY([x, y]);
                }}
                onMouseLeave={() => {
                    // close magnifier
                    setShowMagnifier(false);
                }}
                alt={"img-magnifier"}
            />

            <div
                style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent magnifier blocks the mousemove event of img
                    pointerEvents: "none",
                    // set size of magnifier
                    height: `${magnifierHeight}px`,
                    width: `${magnifierWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifierWidth / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "1px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,

                    //calculate position of zoomed image.
                    backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
                className="magnifier-lens"
            ></div>
        </div>
    );
}

export default ImageMagnifier;
