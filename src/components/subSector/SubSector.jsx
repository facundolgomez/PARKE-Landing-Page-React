import UpScreen from "../upscreen/UpScreen";
const SubSector = ({ image, typeOfSubSector, description }) => {
  return (
    <div>
      <UpScreen
        pathImage={image}
        title={typeOfSubSector}
        paragraph={description}
      />
    </div>
  );
};

export default SubSector;
