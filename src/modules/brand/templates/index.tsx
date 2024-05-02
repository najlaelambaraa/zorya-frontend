import ProfileDisplay , { PersonInfo }from "@modules/brand/components/profileDisplay";

const BrandTemplate: React.FC = () => {
    const people: PersonInfo[] = [
      {
        imageUrl: "/path/to/image1.jpg",
        fullName: "HUGO MONNIER",
        profession: "Commercial"
      },
      {
        imageUrl: "/path/to/image2.jpg",
        fullName: "GREGOIRE DELARUE",
        profession: "Fondateur"
      },
      {
        imageUrl: "/path/to/image3.jpg",
        fullName: "NINO PARMENT",
        profession: "Colaborateur"
      }
    ];
  
    return (
      <div className="bg-bg">
        
        <ProfileDisplay profiles={people} />
      </div>
    );
  };
  export default BrandTemplate;
  
  
  