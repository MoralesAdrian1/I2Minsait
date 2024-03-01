export function Select({ name, register, options, autoFocus, error, className }) {
    return (
      <div>
        <select
          name={name}
          {...register(name)}
          autoFocus={autoFocus}
          className={`tu-clase-de-estilo-para-select ${className} ${error ? 'clase-de-error' : ''}`} // Añade tus clases de estilo aquí. También maneja la clase de error si es necesario.
        >
          <option value="">Seleccione...</option> {/* Opción predeterminada */}
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="text-red-500 text-xs italic">{error.message}</p>}
      </div>
    );
  }
  