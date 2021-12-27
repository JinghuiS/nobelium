const BaseHeader = ({ header }) => {
  return (
    <div className="mb-10  md:px-10 w-full mx-auto   ">
      <img
        className="mx-auto   w-full object-cover md:rounded-2xl md:shadow-xl"
        style={{ height: '30vh' }}
        src={header.header_bg}
      />
      <div className="relative">
        <div className="absolute  -bottom-10 flex justify-center w-full ">
          <img
            className="rounded-full relative  shadow-xl base-header-icon"
            src={header.header_icon}
          />
        </div>
      </div>
      <h1 className="text-4xl text-center  mt-20">{header.title}</h1>
    </div>
  )
}

export default BaseHeader
