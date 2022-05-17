import Figure from 'react-bootstrap/Figure'


function ProfPicSection(props) {

    return (
<Figure>
    <Figure.Caption>
        {props.user.name}
    </Figure.Caption>
  <Figure.Image
    width={171}
    height={180}
    alt="171x180"
    src={props.user.imageUrl}
    className="profilePic"
  />
</Figure>
    )
}

export default ProfPicSection;