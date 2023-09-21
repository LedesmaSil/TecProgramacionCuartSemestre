package UTN.conexion;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class Conexion {
    public static Connection getConnection(){
        Connection conexion = null;
        //Variable para conectarnos a la base de datos
        var baseDatos = "estudiantes";
        var url = "jdbc:mysql://localhost:3606/"+baseDatos;
        var usuario = "root";
        var password = "240484";

        //cargamos la clase del drive de mysql en memoria
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conexion = DriverManager.getConnection(url, usuario, password);
        } catch (ClassNotFoundException | SQLException e){
            System.out.println("Ocurrió un error en la conexion: "+e.getMessage());
        } //Fin catch
        return conexion;
    }//Fin método Connection
}//Fin
