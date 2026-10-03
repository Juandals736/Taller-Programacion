import { useState } from "react"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

function App() {
  const [nombre, setNombre] = useState("")
  const [correo, setCorreo] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [dialogoAbierto, setDialogoAbierto] = useState(false)
  const [modoOscuro, setModoOscuro] = useState(false)

  const registrarUsuario = (e: React.FormEvent) => {
    e.preventDefault()

    if (!nombre || !correo || !password) {
      setError("Todos los campos son obligatorios.")
      return
    }

    if (!correo.includes("@")) {
      setError("Ingresa un correo válido.")
      return
    }

    if (password.length < 6) {
      setError("La contraseña debe tener mínimo 6 caracteres.")
      return
    }

    setError("")
    setDialogoAbierto(true)
  }

  return (
    <main
      className={
        modoOscuro
          ? "min-h-screen bg-slate-950 text-white p-6"
          : "min-h-screen bg-violet-50 text-slate-900 p-6"
      }
    >
      <div className="max-w-md mx-auto pt-10">

        <div className="flex justify-end mb-4">
          <Button
            variant="outline"
            onClick={() => setModoOscuro(!modoOscuro)}
          >
            {modoOscuro ? "☀️ Modo claro" : "🌙 Modo oscuro"}
          </Button>
        </div>

        <Card
          className={
            modoOscuro
              ? "bg-slate-900 border-slate-700 text-white"
              : "bg-white"
          }
        >
          <CardHeader>
            <CardTitle className="text-3xl">
              Crear cuenta
            </CardTitle>

            <CardDescription
              className={modoOscuro ? "text-slate-400" : ""}
            >
              Únete a Taskly y organiza tus tareas.
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form
              onSubmit={registrarUsuario}
              className="space-y-5"
            >
              <div className="space-y-2">
                <Label htmlFor="nombre">
                  Nombre
                </Label>

                <Input
                  id="nombre"
                  type="text"
                  placeholder="Escribe tu nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo">
                  Correo electrónico
                </Label>

                <Input
                  id="correo"
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">
                  Contraseña
                </Label>

                <Input
                  id="password"
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}

              <Button
                type="submit"
                className="w-full"
              >
                Crear cuenta
              </Button>
            </form>
          </CardContent>
        </Card>

        <Dialog
          open={dialogoAbierto}
          onOpenChange={setDialogoAbierto}
        >
          <DialogContent>
            <DialogHeader>
              <DialogTitle>
                ¡Registro exitoso! 🎉
              </DialogTitle>

              <DialogDescription>
                Bienvenido a Taskly, {nombre}.
                Tu cuenta ha sido creada correctamente.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>

      </div>
    </main>
  )
}

export default App
