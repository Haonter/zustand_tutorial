const styles = {
  main: 'flex flex-col items-center justify-center min-h-screen bg-gray-700 gap-6',
  container: 'max-w-4xl mx-auto p-4',
  header: 'text-2xl font-bold mb-4 text-white',
  button: {
    dividir: 'bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded',
    agregar: 'bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded',
    eliminar: 'bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded',
    doble: 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded'
  },
  input: `w-[250px] border border-gray-300 p-2 rounded-xl focus:outline-none focus:border-2 
    focus:border-blue-500 focus:shadow-md transition-all duration-200 text-white`,
  contenedorBotones: 'grid grid-cols-2 gap-2'
};

export default styles;