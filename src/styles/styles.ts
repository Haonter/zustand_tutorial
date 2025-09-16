const styles = {
  nav: {
    contenedor: 'flex w-full items-center justify-between py-4 px-12 bg-gray-800 text-white',
    titulo: 'text-2xl font-bold',
    contenedorBotones: 'flex gap-4'
  },
  main: 'flex flex-col items-center min-h-screen bg-gray-700 gap-[25vh]',
  container: 'max-w-4xl mx-auto p-4',
  contentContainer: 'flex flex-col w-full h-full justify-center items-center gap-4',
  header: 'text-2xl font-bold mb-4 text-white',
  button: {
    dividir: 'bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded',
    agregar: 'bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded',
    eliminar: 'bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded',
    doble: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
    navegar: 'bg-slate-600 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full'
  },
  input: `w-[250px] border border-gray-300 p-2 rounded-xl focus:outline-none focus:border-2 
    focus:border-blue-500 focus:shadow-md transition-all duration-200 text-white`,
  homeContenedorBotones: 'grid grid-cols-2 gap-2',
  advanced: {
    contentContainer: 'grid grid-cols-3 gap-4 w-full h-full',
    aside: 'col-span-1 flex flex-col gap-4',
  }
};

export default styles;