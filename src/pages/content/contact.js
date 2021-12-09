import React, { useRef } from 'react';
import Structure from '../../components/structure/Structure';
import { Helmet } from 'react-helmet';
import { siteData } from '../../data/site/Site-Data';
import Grid from '../../components/controls/grid/Grid';
import Column from '../../components/controls/grid/column/Column';
import Img from '../../components/controls/img/Img';
import { Editor } from '@tinymce/tinymce-react';


export default function Contact() {
  
    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
        console.log(editorRef.current.getContent());
        }
    };
    return (
      <>
      <Helmet>
        <title>{siteData.name} - Kontakt</title>   
        <meta property="og:type" content="content-page" />
      </Helmet>
      <Structure>
        <Img color="#FFF" shadow={true} headertag="h1" header="Kontakt" src="https://wallpapercave.com/wp/wp7614970.jpg"/>
        <section>
          <Grid gap="40px">
            <Column>
              <Editor
                onInit={(evt, editor) => editorRef.current = editor}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                  height: 500,
                  menubar: true,
                  plugins: [
                    'advlist autolink lists link image charmap print preview anchor',
                    'searchreplace visualblocks code fullscreen',
                    'insertdatetime media table paste code help wordcount'
                  ],
                  toolbar: 'undo redo | formatselect | ' +
                  'bold italic backcolor | alignleft aligncenter ' +
                  'alignright alignjustify | bullist numlist outdent indent | ' +
                  'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
              <button onClick={log}>Log editor content</button>
            </Column>
            <Column>
            <form name="contact" method="POST" data-netlify="true">
              <p>
                <label>Your Name: <input type="text" name="name" /></label>   
              </p>
              <p>
                <label>Your Email: <input type="email" name="email" /></label>
              </p>
              <p>
                <label>Your Role: <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select></label>
              </p>
              <p>
                <label>Message: <textarea name="message"></textarea></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
            </Column>
          </Grid>
        </section>  
      </Structure>
      </>
    )
}
