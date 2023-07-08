export default function Profile({ params }) {
  console.log(params);
  return (
    <div>
      <h1>
        Profile page Value is :
        <span className="mx-2 text-xl font-bold bg-orange-500">
          {params.id}
        </span>
      </h1>
    </div>
  );
}
