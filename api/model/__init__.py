from datetime import datetime, timedelta, date, time

class model(object):

    def __init__(self, parent=None):

        self.host = "127.0.0.1"
        self.user = "admin"
        
        #self.host = "10.71.82.52"
        #self.user = "dedicado"

        self.password = "4dm1n_001"
        self.database = "et_mbi_3"
       
       
        self.serverp2 = "NAAPNX-FAMX4"
        self.dbp2 = "agrucomb_prod"
        self.userp2 = "pnx_agrucomb_prod"
        self.passwordp2 = "pJ0rge2021"

        self.printerhost = "192.168.1.103"

    def datos_acceso(self):
        return self.host,self.user,self.password,self.database,self.serverp2,self.dbp2,self.userp2,self.passwordp2,self.printerhost


