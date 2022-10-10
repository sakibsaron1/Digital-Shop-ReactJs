import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1>What is Context API ? </h1>
            <h3>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux. We want to build a “theme toggler” component which toggles between light mode and dark mode for our React app. Every component has to have access to the current theme mode so they can be styled accordingly.

Normally, we would provide the current theme mode to all the components through props and update the current theme using state:</h3> <br /><br /><br />

            <h1>What is Semantic Tag ? </h1>
            <h3>Semantic HTML tags provide information about the contents of those tags that goes beyond just how they look on a page. Text that is enclosed in the  tag is immediately recognized by the browser as some type of coding language. Instead of trying to render that code, the browser understands that you are using that text as an example of the code for the purposes of an article or online tutorial.

Using semantic tags gives you many more hooks for styling your content, too. Perhaps today you prefer to have your code samples display in the default browser style, but tomorrow, you might want to call them out with a gray background color; later still, you might want to define the precise mono-spaced font family or font stack to use for your samples. You can do all of these things easily by using semantic markup and smartly applied CSS. </h3> <br /><br /><br />
        </div>
    );
};

export default Blogs;