# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'admin.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_admin(object):
    def setupUi(self, admin):
        admin.setObjectName("admin")
        admin.resize(500, 500)
        sizePolicy = QtWidgets.QSizePolicy(QtWidgets.QSizePolicy.Fixed, QtWidgets.QSizePolicy.Fixed)
        sizePolicy.setHorizontalStretch(0)
        sizePolicy.setVerticalStretch(0)
        sizePolicy.setHeightForWidth(admin.sizePolicy().hasHeightForWidth())
        admin.setSizePolicy(sizePolicy)
        admin.setMinimumSize(QtCore.QSize(500, 500))
        admin.setMaximumSize(QtCore.QSize(500, 500))
        palette = QtGui.QPalette()
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.WindowText, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Button, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Light, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Midlight, brush)
        brush = QtGui.QBrush(QtGui.QColor(127, 127, 127))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Dark, brush)
        brush = QtGui.QBrush(QtGui.QColor(170, 170, 170))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Mid, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Text, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.BrightText, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.ButtonText, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Base, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Window, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.Shadow, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.AlternateBase, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 220))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.ToolTipBase, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Active, QtGui.QPalette.ToolTipText, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.WindowText, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Button, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Light, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Midlight, brush)
        brush = QtGui.QBrush(QtGui.QColor(127, 127, 127))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Dark, brush)
        brush = QtGui.QBrush(QtGui.QColor(170, 170, 170))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Mid, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Text, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.BrightText, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.ButtonText, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Base, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Window, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.Shadow, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.AlternateBase, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 220))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.ToolTipBase, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Inactive, QtGui.QPalette.ToolTipText, brush)
        brush = QtGui.QBrush(QtGui.QColor(127, 127, 127))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.WindowText, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Button, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Light, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Midlight, brush)
        brush = QtGui.QBrush(QtGui.QColor(127, 127, 127))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Dark, brush)
        brush = QtGui.QBrush(QtGui.QColor(170, 170, 170))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Mid, brush)
        brush = QtGui.QBrush(QtGui.QColor(127, 127, 127))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Text, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.BrightText, brush)
        brush = QtGui.QBrush(QtGui.QColor(127, 127, 127))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.ButtonText, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Base, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Window, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.Shadow, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 255))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.AlternateBase, brush)
        brush = QtGui.QBrush(QtGui.QColor(255, 255, 220))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.ToolTipBase, brush)
        brush = QtGui.QBrush(QtGui.QColor(0, 0, 0))
        brush.setStyle(QtCore.Qt.SolidPattern)
        palette.setBrush(QtGui.QPalette.Disabled, QtGui.QPalette.ToolTipText, brush)
        admin.setPalette(palette)
        self.checkBox_1 = QtWidgets.QCheckBox(admin)
        self.checkBox_1.setEnabled(False)
        self.checkBox_1.setGeometry(QtCore.QRect(10, 10, 211, 17))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_1.setFont(font)
        self.checkBox_1.setObjectName("checkBox_1")
        self.checkBox_2 = QtWidgets.QCheckBox(admin)
        self.checkBox_2.setEnabled(False)
        self.checkBox_2.setGeometry(QtCore.QRect(10, 40, 211, 17))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_2.setFont(font)
        self.checkBox_2.setObjectName("checkBox_2")
        #self.lbl_desoutter = QtWidgets.QLabel(admin)
        #self.lbl_desoutter.setGeometry(QtCore.QRect(60, 10, 91, 111))
        #self.lbl_desoutter.setText("")
        #self.lbl_desoutter.setPixmap(QtGui.QPixmap(":/images/images/desoutter.jpg"))
        #self.lbl_desoutter.setScaledContents(True)
        #self.lbl_desoutter.setObjectName("lbl_desoutter")
        #self.btn_torque = QtWidgets.QPushButton(admin)
        #self.btn_torque.setEnabled(False)
        #self.btn_torque.setGeometry(QtCore.QRect(40, 120, 121, 41))
        #font = QtGui.QFont()
        #font.setPointSize(11)
        #font.setBold(True)
        #font.setWeight(75)
        #self.btn_torque.setFont(font)
        #self.btn_torque.setObjectName("btn_torque")
        self.btn_reset = QtWidgets.QPushButton(admin)
        self.btn_reset.setEnabled(False)
        self.btn_reset.setGeometry(QtCore.QRect(245, 10, 100, 30))
        font = QtGui.QFont()
        font.setPointSize(11)
        font.setBold(True)
        font.setWeight(75)
        self.btn_reset.setFont(font)
        self.btn_reset.setObjectName("btn_reset")

        self.checkBox_3 = QtWidgets.QCheckBox(admin)
        self.checkBox_3.setEnabled(False)
        self.checkBox_3.setGeometry(QtCore.QRect(10, 70, 211, 25))
        font = QtGui.QFont()
        font.setPointSize(8)
        self.checkBox_3.setFont(font)
        self.checkBox_3.setObjectName("checkBox_3")

        self.checkBox_4 = QtWidgets.QCheckBox(admin)
        self.checkBox_4.setEnabled(False)
        self.checkBox_4.setGeometry(QtCore.QRect(10, 110, 211, 17))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_4.setFont(font)
        self.checkBox_4.setObjectName("checkBox_4")

        #self.label = QtWidgets.QLabel(admin)
        #self.label.setGeometry(QtCore.QRect(230, 20, 91, 91))
        #self.label.setText("")
        #self.label.setPixmap(QtGui.QPixmap(":/images/images/reset.jpg"))
        #self.label.setScaledContents(True)
        #self.label.setObjectName("label")

        self.btn_off = QtWidgets.QPushButton(admin)
        self.btn_off.setGeometry(QtCore.QRect(210, 10, 121, 41))
        self.btn_off.setObjectName("btn_off")

        self.checkBox_5 = QtWidgets.QCheckBox(admin)
        self.checkBox_5.setEnabled(False)
        self.checkBox_5.setGeometry(QtCore.QRect(10, 10, 211, 21))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_5.setFont(font)
        self.checkBox_5.setObjectName("checkBox_5")
        self.checkBox_6 = QtWidgets.QCheckBox(admin)
        self.checkBox_6.setEnabled(False)

        self.checkBox_6.setGeometry(QtCore.QRect(10, 130, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_6.setFont(font)
        self.checkBox_6.setChecked(True)
        self.checkBox_6.setObjectName("checkBox_6")

        self.checkBox_7 = QtWidgets.QCheckBox(admin)
        self.checkBox_7.setEnabled(False)
        self.checkBox_7.setGeometry(QtCore.QRect(10, 160, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(10)
        self.checkBox_7.setFont(font)
        self.checkBox_7.setObjectName("checkBox_7")

        self.checkBox_8 = QtWidgets.QCheckBox(admin)
        self.checkBox_8.setEnabled(False)
        self.checkBox_8.setGeometry(QtCore.QRect(10, 190, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_8.setFont(font)
        self.checkBox_8.setObjectName("checkBox_8")

        self.checkBox_9 = QtWidgets.QCheckBox(admin)
        self.checkBox_9.setEnabled(False)
        self.checkBox_9.setGeometry(QtCore.QRect(10, 220, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_9.setFont(font)
        self.checkBox_9.setObjectName("checkBox_9")

        self.checkBox_10 = QtWidgets.QCheckBox(admin)
        self.checkBox_10.setEnabled(False)
        self.checkBox_10.setGeometry(QtCore.QRect(10, 250, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_10.setFont(font)
        self.checkBox_10.setObjectName("checkBox_10")

        self.checkBox_11 = QtWidgets.QCheckBox(admin)
        self.checkBox_11.setEnabled(False)
        self.checkBox_11.setGeometry(QtCore.QRect(10, 280, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_11.setFont(font)
        self.checkBox_11.setObjectName("checkBox_11")

        self.checkBox_12 = QtWidgets.QCheckBox(admin)
        self.checkBox_12.setEnabled(False)
        self.checkBox_12.setGeometry(QtCore.QRect(10, 310, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_12.setFont(font)
        self.checkBox_12.setObjectName("checkBox_12")
        
        self.checkBox_altura_tool1 = QtWidgets.QCheckBox(admin)
        self.checkBox_altura_tool1.setEnabled(False)
        self.checkBox_altura_tool1.setGeometry(QtCore.QRect(10, 340, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_altura_tool1.setFont(font)
        self.checkBox_altura_tool1.setObjectName("checkBox_altura_tool1")

        self.checkBox_altura_tool2 = QtWidgets.QCheckBox(admin)
        self.checkBox_altura_tool2.setEnabled(False)
        self.checkBox_altura_tool2.setGeometry(QtCore.QRect(10, 370, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_altura_tool2.setFont(font)
        self.checkBox_altura_tool2.setObjectName("checkBox_altura_tool2")

        self.checkBox_altura_tool3 = QtWidgets.QCheckBox(admin)
        self.checkBox_altura_tool3.setEnabled(False)
        self.checkBox_altura_tool3.setGeometry(QtCore.QRect(10, 400, 211, 31))
        font = QtGui.QFont()
        font.setPointSize(11)
        self.checkBox_altura_tool3.setFont(font)
        self.checkBox_altura_tool3.setObjectName("checkBox_altura_tool3")




        ################ MFB-P2 ############################

        font = QtGui.QFont()
        font.setPointSize(7)

        self.checkBoxMFBP2_A20 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A20.setEnabled(False)
        self.checkBoxMFBP2_A20.setGeometry(QtCore.QRect(240, 50, 150, 12))
        self.checkBoxMFBP2_A20.setFont(font)
        self.checkBoxMFBP2_A20.setObjectName("checkBoxMFBP2_A20")
        self.checkBoxMFBP2_A20.setText("MFB-P2: A20")
        
        self.checkBoxMFBP2_A21 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A21.setEnabled(False)
        self.checkBoxMFBP2_A21.setGeometry(QtCore.QRect(240, 60, 150, 12))
        self.checkBoxMFBP2_A21.setFont(font)
        self.checkBoxMFBP2_A21.setObjectName("checkBoxMFBP2_A21")
        self.checkBoxMFBP2_A21.setText("MFB-P2: A21")
        
        self.checkBoxMFBP2_A22 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A22.setEnabled(False)
        self.checkBoxMFBP2_A22.setGeometry(QtCore.QRect(240, 70, 150, 12))
        self.checkBoxMFBP2_A22.setFont(font)
        self.checkBoxMFBP2_A22.setObjectName("checkBoxMFBP2_A22")
        self.checkBoxMFBP2_A22.setText("MFB-P2: A22")
        
        self.checkBoxMFBP2_A23 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A23.setEnabled(False)
        self.checkBoxMFBP2_A23.setGeometry(QtCore.QRect(240, 80, 150, 12))
        self.checkBoxMFBP2_A23.setFont(font)
        self.checkBoxMFBP2_A23.setObjectName("checkBoxMFBP2_A23")
        self.checkBoxMFBP2_A23.setText("MFB-P2: A23")
        
        self.checkBoxMFBP2_A24 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A24.setEnabled(False)
        self.checkBoxMFBP2_A24.setGeometry(QtCore.QRect(240, 90, 150, 12))
        self.checkBoxMFBP2_A24.setFont(font)
        self.checkBoxMFBP2_A24.setObjectName("checkBoxMFBP2_A24")
        self.checkBoxMFBP2_A24.setText("MFB-P2: A24")

        self.checkBoxMFBP2_A25 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A25.setEnabled(False)
        self.checkBoxMFBP2_A25.setGeometry(QtCore.QRect(240, 100, 150, 12))
        self.checkBoxMFBP2_A25.setFont(font)
        self.checkBoxMFBP2_A25.setObjectName("checkBoxMFBP2_A25")
        self.checkBoxMFBP2_A25.setText("MFB-P2: A25")

        self.checkBoxMFBP2_A26 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A26.setEnabled(False)
        self.checkBoxMFBP2_A26.setGeometry(QtCore.QRect(240, 110, 150, 12))
        self.checkBoxMFBP2_A26.setFont(font)
        self.checkBoxMFBP2_A26.setObjectName("checkBoxMFBP2_A26")
        self.checkBoxMFBP2_A26.setText("MFB-P2: A26")

        self.checkBoxMFBP2_A27 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A27.setEnabled(False)
        self.checkBoxMFBP2_A27.setGeometry(QtCore.QRect(240, 120, 150, 12))
        self.checkBoxMFBP2_A27.setFont(font)
        self.checkBoxMFBP2_A27.setObjectName("checkBoxMFBP2_A27")
        self.checkBoxMFBP2_A27.setText("MFB-P2: A27")

        self.checkBoxMFBP2_A28 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A28.setEnabled(False)
        self.checkBoxMFBP2_A28.setGeometry(QtCore.QRect(240, 130, 150, 12))
        self.checkBoxMFBP2_A28.setFont(font)
        self.checkBoxMFBP2_A28.setObjectName("checkBoxMFBP2_A28")
        self.checkBoxMFBP2_A28.setText("MFB-P2: A28")

        self.checkBoxMFBP2_A29 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A29.setEnabled(False)
        self.checkBoxMFBP2_A29.setGeometry(QtCore.QRect(240, 140, 150, 12))
        self.checkBoxMFBP2_A29.setFont(font)
        self.checkBoxMFBP2_A29.setObjectName("checkBoxMFBP2_A29")
        self.checkBoxMFBP2_A29.setText("MFB-P2: A29")

        self.checkBoxMFBP2_A30 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP2_A30.setEnabled(False)
        self.checkBoxMFBP2_A30.setGeometry(QtCore.QRect(240, 150, 150, 12))
        self.checkBoxMFBP2_A30.setFont(font)
        self.checkBoxMFBP2_A30.setObjectName("checkBoxMFBP2_A30")
        self.checkBoxMFBP2_A30.setText("MFB-P2: A30")
        ################ MFB-P1 ############################

        font = QtGui.QFont()
        font.setPointSize(7)

        self.checkBoxMFBP1_A41 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A41.setEnabled(False)
        self.checkBoxMFBP1_A41.setGeometry(QtCore.QRect(240, 160, 150, 12))
        self.checkBoxMFBP1_A41.setFont(font)
        self.checkBoxMFBP1_A41.setObjectName("checkBoxMFBP1_A41")
        self.checkBoxMFBP1_A41.setText("MFB-P1: A41")

        self.checkBoxMFBP1_A42 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A42.setEnabled(False)
        self.checkBoxMFBP1_A42.setGeometry(QtCore.QRect(240, 170, 150, 12))
        self.checkBoxMFBP1_A42.setFont(font)
        self.checkBoxMFBP1_A42.setObjectName("checkBoxMFBP1_A42")
        self.checkBoxMFBP1_A42.setText("MFB-P1: A42")

        self.checkBoxMFBP1_A43 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A43.setEnabled(False)
        self.checkBoxMFBP1_A43.setGeometry(QtCore.QRect(240, 180, 150, 12))
        self.checkBoxMFBP1_A43.setFont(font)
        self.checkBoxMFBP1_A43.setObjectName("checkBoxMFBP1_A43")
        self.checkBoxMFBP1_A43.setText("MFB-P1: A43")

        self.checkBoxMFBP1_A44 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A44.setEnabled(False)
        self.checkBoxMFBP1_A44.setGeometry(QtCore.QRect(240, 190, 150, 12))
        self.checkBoxMFBP1_A44.setFont(font)
        self.checkBoxMFBP1_A44.setObjectName("checkBoxMFBP1_A44")
        self.checkBoxMFBP1_A44.setText("MFB-P1: A44")

        self.checkBoxMFBP1_A45 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A45.setEnabled(False)
        self.checkBoxMFBP1_A45.setGeometry(QtCore.QRect(240, 200, 150, 12))
        self.checkBoxMFBP1_A45.setFont(font)
        self.checkBoxMFBP1_A45.setObjectName("checkBoxMFBP1_A45")
        self.checkBoxMFBP1_A45.setText("MFB-P1: A45")

        self.checkBoxMFBP1_A46 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A46.setEnabled(False)
        self.checkBoxMFBP1_A46.setGeometry(QtCore.QRect(240, 210, 150, 12))
        self.checkBoxMFBP1_A46.setFont(font)
        self.checkBoxMFBP1_A46.setObjectName("checkBoxMFBP1_A46")
        self.checkBoxMFBP1_A46.setText("MFB-P1: A46")

        self.checkBoxMFBP1_A47 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBP1_A47.setEnabled(False)
        self.checkBoxMFBP1_A47.setGeometry(QtCore.QRect(240, 220, 150, 12))
        self.checkBoxMFBP1_A47.setFont(font)
        self.checkBoxMFBP1_A47.setObjectName("checkBoxMFBP1_A47")
        self.checkBoxMFBP1_A47.setText("MFB-P1: A47")

        ################ MFB-S ############################

        font = QtGui.QFont()
        font.setPointSize(7)

        self.checkBoxMFBS_A51 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBS_A51.setEnabled(False)
        self.checkBoxMFBS_A51.setGeometry(QtCore.QRect(240, 230, 150, 12))
        self.checkBoxMFBS_A51.setFont(font)
        self.checkBoxMFBS_A51.setObjectName("checkBoxMFBS_A51")
        self.checkBoxMFBS_A51.setText("MFB-S: A51")

        self.checkBoxMFBS_A52 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBS_A52.setEnabled(False)
        self.checkBoxMFBS_A52.setGeometry(QtCore.QRect(240, 240, 150, 12))
        self.checkBoxMFBS_A52.setFont(font)
        self.checkBoxMFBS_A52.setObjectName("checkBoxMFBS_A52")
        self.checkBoxMFBS_A52.setText("MFB-S: A52")

        self.checkBoxMFBS_A53 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBS_A53.setEnabled(False)
        self.checkBoxMFBS_A53.setGeometry(QtCore.QRect(240, 250, 150, 12))
        self.checkBoxMFBS_A53.setFont(font)
        self.checkBoxMFBS_A53.setObjectName("checkBoxMFBS_A53")
        self.checkBoxMFBS_A53.setText("MFB-S: A53")

        self.checkBoxMFBS_A54 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBS_A54.setEnabled(False)
        self.checkBoxMFBS_A54.setGeometry(QtCore.QRect(240, 260, 150, 12))
        self.checkBoxMFBS_A54.setFont(font)
        self.checkBoxMFBS_A54.setObjectName("checkBoxMFBS_A54")
        self.checkBoxMFBS_A54.setText("MFB-S: A54")

        self.checkBoxMFBS_A55 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBS_A55.setEnabled(False)
        self.checkBoxMFBS_A55.setGeometry(QtCore.QRect(240, 270, 150, 12))
        self.checkBoxMFBS_A55.setFont(font)
        self.checkBoxMFBS_A55.setObjectName("checkBoxMFBS_A55")
        self.checkBoxMFBS_A55.setText("MFB-S: A55")

        self.checkBoxMFBS_A56 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBS_A56.setEnabled(False)
        self.checkBoxMFBS_A56.setGeometry(QtCore.QRect(240, 280, 150, 12))
        self.checkBoxMFBS_A56.setFont(font)
        self.checkBoxMFBS_A56.setObjectName("checkBoxMFBS_A56")
        self.checkBoxMFBS_A56.setText("MFB-S: A56")

        ################ MFB-E ############################

        font = QtGui.QFont()
        font.setPointSize(7)

        self.checkBoxMFBE_E1 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBE_E1.setEnabled(False)
        self.checkBoxMFBE_E1.setGeometry(QtCore.QRect(240, 290, 150, 12))
        self.checkBoxMFBE_E1.setFont(font)
        self.checkBoxMFBE_E1.setObjectName("checkBoxMFBE_E1")
        self.checkBoxMFBE_E1.setText("MFB-E: E1")

        self.checkBoxMFBE_A1 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBE_A1.setEnabled(False)
        self.checkBoxMFBE_A1.setGeometry(QtCore.QRect(240, 300, 150, 12))
        self.checkBoxMFBE_A1.setFont(font)
        self.checkBoxMFBE_A1.setObjectName("checkBoxMFBE_A1")
        self.checkBoxMFBE_A1.setText("MFB-E: A1")

        self.checkBoxMFBE_A2 = QtWidgets.QCheckBox(admin)
        self.checkBoxMFBE_A2.setEnabled(False)
        self.checkBoxMFBE_A2.setGeometry(QtCore.QRect(240, 310, 150, 12))
        self.checkBoxMFBE_A2.setFont(font)
        self.checkBoxMFBE_A2.setObjectName("checkBoxMFBE_A2")
        self.checkBoxMFBE_A2.setText("MFB-E: A2")


        self.retranslateUi(admin)
        QtCore.QMetaObject.connectSlotsByName(admin)

    def retranslateUi(self, admin):
        _translate = QtCore.QCoreApplication.translate
        admin.setWindowTitle(_translate("admin", "Administración"))
        self.checkBox_1.setText(_translate("admin", "Abrir carpeta de archivos"))
        self.checkBox_2.setText(_translate("admin", "Cajas repetidas"))
        #self.btn_torque.setText(_translate("admin", "Torque manual"))
        self.btn_reset.setText(_translate("admin", "Reiniciar PC"))
        self.btn_off.setText(_translate("admin", "Apagar"))
        self.checkBox_3.setText(_translate("admin", "Habilitar Comparación de \nPDC-D y PDC-P con FET"))
        self.checkBox_4.setText(_translate("admin", "Habilitar GDI"))
        self.checkBox_5.setText(_translate("admin", "Modo Puntual"))
        self.checkBox_6.setText(_translate("admin", "Usar Hora del Servidor"))
        self.checkBox_7.setText(_translate("admin", "Revisión de Conectores PDC-P"))
        self.checkBox_8.setText(_translate("admin", "Alarma Tuerca Faltante"))
        self.checkBox_9.setText(_translate("admin", "Sin Tuerca PDC-R"))
        self.checkBox_10.setText(_translate("admin", "Zonas - Sensores Inductivos"))
        self.checkBox_11.setText(_translate("admin", "Función Shift Ctrl Focus"))
        self.checkBox_12.setText(_translate("admin", "Sistema de Trazabilidad"))
        self.checkBox_altura_tool1.setText(_translate("admin", "Deshabilitar Altura Tool1"))
        self.checkBox_altura_tool2.setText(_translate("admin", "Deshabilitar Altura Tool2"))
        self.checkBox_altura_tool3.setText(_translate("admin", "Deshabilitar Altura Tool3"))


if __name__ == "__main__":
    import sys
    app = QtWidgets.QApplication(sys.argv)
    admin = QtWidgets.QWidget()
    ui = Ui_admin()
    ui.setupUi(admin)
    admin.show()
    sys.exit(app.exec_())
