export default function Footer() {
  return (
    <footer className="mt-auto p-4 bg-gray-900">
      <div className="mx-auto p-2 w-auto block text-white text-center">
        <p>
          Creado con 🧡 por Gabriel Martínez para{" "}
          <a
            href="https://www.webreactiva.com/"
            target="_blank"
            title="Web Reactiva"
            className="bg-gray-200 px-2 py-1 rounded-md text-zinc-800 shadow-md shadow-indigo-500/40 "
          >
            <strong className="break-keep">webreactiva.com</strong>
          </a>{" "}
          con <strong>NextJS</strong> & <strong>Tailwind CSS</strong> |{" "}
          <a
            href="https://github.com/webreactiva-devs/reto-nextjs"
            target="_blank"
          >
            GitHub
          </a>
        </p>
      </div>
    </footer>
  );
}
