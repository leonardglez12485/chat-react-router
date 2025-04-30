# Biblioteca de Chat de Soporte

Este proyecto es una biblioteca de chat de soporte construida con React, TypeScript y Vite. Proporciona una interfaz moderna y personalizable para integrar un sistema de chat de soporte en cualquier aplicación web.

## 🚀 Características

- 💬 Interfaz de chat moderna y responsive
- 🎨 Personalizable con temas y estilos
- 🔒 Tipado fuerte con TypeScript
- ⚡ Desarrollo rápido con Vite
- 📱 Soporte para dispositivos móviles
- 🔄 Actualización en tiempo real de mensajes

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [url-del-repositorio]
```

2. Instala las dependencias:
```bash
npm install
# o
yarn install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
# o
yarn dev
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/     # Componentes reutilizables
├── hooks/         # Hooks personalizados
├── styles/        # Estilos y temas
├── types/         # Definiciones de tipos
└── utils/         # Utilidades y helpers
```

## 🔧 Configuración

### ESLint

Para una mejor experiencia de desarrollo, recomendamos configurar ESLint con reglas específicas para TypeScript:

```js
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

## 📦 Integración

Para integrar el chat en tu aplicación:

```tsx
import { ChatWidget } from 'suport-chat-library';

function App() {
  return (
    <ChatWidget
      apiKey="tu-api-key"
      theme="light"
      position="bottom-right"
    />
  );
}
```

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte, por favor abre un issue en el repositorio o contacta al equipo de desarrollo.
