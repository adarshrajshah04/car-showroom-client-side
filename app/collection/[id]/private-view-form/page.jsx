import CarDemoForm from "@/components/cars/CarDemoForm";

const PrivateViewForm = async ({ params }) => {
  const { id } = await params;

 

  return (
    <div>
      <h3>Private View Form</h3>
      <CarDemoForm id={id}/>
     
    </div>
  );
};

export default PrivateViewForm;