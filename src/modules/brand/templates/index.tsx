import ProfileDisplay , { PersonInfo }from "@modules/brand/components/profileDisplay";

const BrandTemplate: React.FC = () => {
    const people: PersonInfo[] = [
      {
        imageUrl: "/path/to/image1.jpg",
        fullName: "HUGO MONNIER",
        profession: "Chill du groupe"
      },
      {
        imageUrl: "/path/to/image2.jpg",
        fullName: "GREGOIRE DELARUE",
        profession: "L'overthinker"
      },
      {
        imageUrl: "/path/to/image3.jpg",
        fullName: "NINO PARMENT",
        profession: "Le rationnel"
      }
    ];
  
    return (
      
        
        <ProfileDisplay profiles={people} />
     
    );
  };
  export default BrandTemplate;
  
  
  