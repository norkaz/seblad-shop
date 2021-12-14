import React from 'react'
import Structure from '../../components/structure/Structure'
import Text from '../../components/controls/text/Text'
import { Link } from 'gatsby';

export default function Design() {
    return (
        <Structure>
            <section>
                <Text>               
                    <h1>Rubrik h1</h1>
                    <p>Paragraph </p>
                    <h2>Rubrik h2</h2>
                    <p>Paragraph </p>
                    <h3>Rubrik h3</h3>
                    <p>Paragraph </p>
                    <h4>Rubrik h4</h4>
                    <p>Paragraph </p>
                    <h5>Rubrik h4</h5>
                    <p>Paragraph </p>
                    <h6>Rubrik h6</h6>
                    <p>Paragraph </p>
                    <p>Paragraph </p>
<<<<<<< HEAD
                    <p>Paragraph <a href="/">link</a> <b>bold</b></p>
=======
                    <p>Paragraph <Link to="/design/design">link</Link> <b>bold</b></p>
>>>>>>> 22a4007f2cc7e943bd1483fc7ec1554d402393fa
                    <button>Button</button>
                </Text>
                </section>
        </Structure>
    )
}
