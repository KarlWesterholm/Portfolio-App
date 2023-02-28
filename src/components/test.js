const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    console.log({id})
    console.log({element})
    console.log(`${anchor}`)
    console.log("working?")
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

{handleClick("projects")}
console.log('hello?')